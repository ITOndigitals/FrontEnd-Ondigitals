import { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

const MapChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    // Áp dụng theme
    am4core.useTheme(am4themes_animated);

    // Tạo chart
    const chart = am4core.create("chartdiv", am4maps.MapChart);
    chartRef.current = chart;

    // Định nghĩa bản đồ
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20, 20, 20, 20);

    // Tạo polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    // Cấu hình series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("rgba(255, 255, 255, 0.3)");
    polygonTemplate.stroke = am4core.color("#FFFFFF4D");
    polygonTemplate.strokeWidth = 0.5;
    polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    // Thêm graticule (lưới bản đồ)
    const graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = am4core.color("#ffffff");
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
    graticuleSeries.fitExtent = false;

    // Cấu hình nền
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.backgroundSeries.mapPolygons.template.polygon.fill =
      am4core.color("#ffffff");

    // Tạo hiệu ứng hover
    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

    // Tạo animation bằng setInterval
    const animateRotation = () => {
      if (isMounted && chart) {
        chart.deltaLongitude += 0.1; // Góc xoay mỗi lần
      }
    };

    const intervalId = setInterval(animateRotation, 100); // Tần suất 20fps (~50ms)

    // Thay đổi màu sắc cho các quốc gia
    const countriesToColor = {
      JP: am4core.color("#D50032"), // Japan (Red)
      CN: am4core.color("#DE2910"), // China (Red)
      TH: am4core.color("#1E30A7"), // Thailand (Blue)
      TW: am4core.color("#C8102E"), // Taiwan (Red)
      VN: am4core.color("#DA291C"), // Vietnam (Red)
      PH: am4core.color("#0033A0"), // Philippines (Blue)
      MY: am4core.color("#006747"), // Malaysia (Green)
      SG: am4core.color("#D11C35"), // Singapore (Red)
      ID: am4core.color("#D32F2F"), // Indonesia (Red)
      AU: am4core.color("#003B5C"), // Australia (Dark Blue)
    };

    polygonSeries.events.on("ready", () => {
      Object.keys(countriesToColor).forEach((countryCode) => {
        const countryPolygon = polygonSeries.getPolygonById(countryCode);
        if (countryPolygon) {
          countryPolygon.fill = countriesToColor[countryCode];
        }
      });
    });

    // Cleanup
    return () => {
      isMounted = false;
      clearInterval(intervalId);
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return (
    <div
      id="chartdiv"
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        position: "relative",
        zIndex: "10",
      }}
    />
  );
};

export default MapChart;
