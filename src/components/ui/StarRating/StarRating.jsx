import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import classes from "./StarRating.module.scss";
import Head from "next/head";

const StarRating = ({ dataRating }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [data, setData] = useState({ average: 0, votes: 0 }); // Mặc định hiển thị 0 đánh giá
  const { title, slug, language, postId } = dataRating || {};
  // Lấy dữ liệu đánh giá chỉ trên client-side
  useEffect(() => {
    let mounted = true;
    const fetchRating = async () => {
      if (!postId) return;
      try {
        const res = await axios.get(
          `https://api.ondigitals.com/wp-json/rating/v1/get-rating?post_id=${postId}`
        );
        if (mounted && res.data) {
          setData({
            average: res.data.average || 0,
            votes: res.data.votes || 0,
          });
        }
      } catch (error) {
        console.error("Error getting rating", error);
      }
    };

    fetchRating();
    return () => (mounted = false);
  }, [postId]);

  const handleClick = useCallback(
    async (value) => {
      if (!postId) return;

      const lastClick = sessionStorage.getItem(`lastRating_${postId}`);
      const now = Date.now();
      if (lastClick && now - parseInt(lastClick) < 60000) {
        alert("Please wait at least 60 seconds before re-evaluating!");
        return;
      }

      try {
        const tokenRes = await axios.get(
          "https://api.ondigitals.com/wp-json/rating/v1/get-token"
        );
        const res = await axios.post(
          "https://api.ondigitals.com/wp-json/rating/v1/rate",
          {
            post_id: postId,
            rating: value,
            token: tokenRes.data.token,
          }
        );
        if (res.data) {
          setData({ average: res.data.average, votes: res.data.votes });
          setRating(value); // Cập nhật rating người dùng vừa chọn
        }
        sessionStorage.setItem(`lastRating_${postId}`, now.toString());
      } catch (error) {
        alert("Error submitting review. Please try again later.");
      }
    },
    [postId]
  );
  // Tạo schema động dựa trên dữ liệu rating
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ondigitals.com/${language !== 'en' ? language + '/' : ''}${slug}/`
    },
    "headline":`${title}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.average.toString(), // Điểm trung bình từ API
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": data.votes.toString(), // Số lượt vote từ API
    },
  };

  return (
    <>
      <Head>
        {/* Chỉ thêm schema nếu có dữ liệu đánh giá */}
        {data.average > 0 && data.votes > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        )}
      </Head>
      <div className={classes["star-rating"]}>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`${classes.star} ${
                star <= (hover || rating) ? classes.active : ""
              }`}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        {data.average > 0 ? (
          <span>
            {data.average} / 5 ({data.votes} vote)
          </span>
        ) : (
          <span>0 vote</span>
        )}
      </div>

   
    </>
  );
};

export default StarRating;