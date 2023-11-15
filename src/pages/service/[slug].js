import ServiceDetail from "@/components/servicedetailpage/ServiceDetail";
import React from "react";
import { GetListSlugService, GetServiceDetailBySlug } from "../api/graphql";

export default function ServiceDetailPage({ dataServiceDetail }) {
  return <ServiceDetail dataServiceDetail={dataServiceDetail} />;
}
export async function getStaticPaths() {
  const listServices = await GetListSlugService();
  const paths = listServices.map((service) => ({
    params: { slug: service.slug },
    locale: service.language.code.toLowerCase(),
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params, locale }) {
  const dataServiceDetail = await GetServiceDetailBySlug(params.slug);
  return {
    props: {
      dataServiceDetail,
    },
  };
}
