import ServicePage from "@/components/servicepage/ServicePage";
import React from "react";
import { GetPageService } from "../api/graphql";

export default function index({data}) {
  return <ServicePage data={data} />;
}
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPageService = 44918;
  const data = await GetPageService(idPageService, language);
  return {
    props: { data },
  };
};
