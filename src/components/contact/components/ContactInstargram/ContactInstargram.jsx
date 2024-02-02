import React, { useEffect, useState } from "react";
import classes from "./ContactInstargram.module.scss";
import Link from "next/link";
import Image from "next/image";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function ContactInstargram({ data }) {
  const [posts, setPosts] = useState([]);
  const { titleLeft, textRight, textButton, accessTokenIntagram } = data;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${accessTokenIntagram}&limit=4`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className={classes["contact-instagram"]}>
      <div className="container">
        <div className={classes["contact-instagram__head"]}>
          <h2 className={classes["contact-instagram__head__title"]}>
            {titleLeft && titleLeft}
          </h2>
          <p className={classes["contact-instagram__head__text"]}>
            {textRight && textRight}
          </p>
        </div>
        <div className={classes["contact-instagram__content"]}>
          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                className={
                  classes["contact-instagram__content__card-Instagram"]
                }
              >
                <a href={post.permalink} target="_blank" rel="nofollow">
                  <Image
                    src={post?.thumbnail_url || post?.media_url}
                    fill
                    style={{ objectFit: "cover" }}
                    alt="Ondigitals"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <p
                    className={
                      classes[
                        "contact-instagram__content__card-Instagram__overlay"
                      ]
                    }
                  >
                    <FontAwesomeIcon fontSize={50} icon={faInstagram} />
                  </p>
                </a>
              </div>
            ))}
        </div>
        <div className={classes["contact-instagram__button"]}>
          <ButtonNoBorder
            href="https://www.instagram.com/ondigitals/"
            textSize="md"
            openInNewTab={true}
            relNofollow={true}
            RightIcon={<TopRightArrow width={24} height={24} color="#000000" />}
          >
            {textButton && textButton}
          </ButtonNoBorder>
        </div>
      </div>
    </section>
  );
}
