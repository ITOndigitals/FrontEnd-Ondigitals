import axios from "axios";
import { wordpressUrl } from "../utils/variables";

export default async function getTotalCounts() {
  try {
    const res = await axios.get(
      `${wordpressUrl}/wp-json/sitemap/v1/totalpages`
    );
    const data = res.data;

    if (!data) {
      throw new Error("No data available");
    }

    const propertyNames = Object.keys(data);
    const excludeItems = [
      "user",
      "card_review",
      "blogs_content",
      "case_study",
      "client",
      "tag",
      "category",
      "service_parent",
    ];

    const totalArray = propertyNames
      .filter((name) => !excludeItems.includes(name))
      .map((name) => {
        return { name, total: data[name] };
      });

    return totalArray;
  } catch (error) {
    console.error("Error fetching data from WordPress API:", error.message);
    return [];
  }
}
