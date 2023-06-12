import InnerHTML from "dangerously-set-html-content";
import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { LmsUrls } from "../constants/lms_urls";
import { getLadingPage } from "../services/cms_service";

const HomePage: NextPage<{ ladingPages: any }> = ({ ladingPages }) => {
  const ladingPage = ladingPages[0];

  function createElementForm(id: any, name: any, value: any) {
    var formItem = document.createElement("div");
    formItem.id = id;
    formItem.classList.add("ladi-element");
    var formContainerItem = document.createElement("div");
    formContainerItem.classList.add("ladi-form-item-container");
    var ladiFormItem = document.createElement("div");
    ladiFormItem.classList.add("ladi-form-item");

    var landing_page_id = document.createElement("input");
    landing_page_id.type = "hidden";
    landing_page_id.name = name;
    landing_page_id.value = value;

    ladiFormItem.appendChild(landing_page_id);
    formContainerItem.appendChild(ladiFormItem);
    formItem.appendChild(formContainerItem);
    return formItem;
  }

  function handleForm() {
    if (ladingPages != null && ladingPages.length > 0) {
      let els = document.getElementsByTagName("form");
      if (
        ladingPages[0].form_builder != null &&
        ladingPages[0].form_builder.length > 0
      ) {
        for (let i = 0; i < els.length; i++) {
          if (els[i]) {
            var elementPageId = createElementForm(
              "FORM_PAGE_ID",
              "landing_page_id",
              ladingPages[0].id
            );
            els[i].appendChild(elementPageId);

            var elementFormId = createElementForm(
              "FORM_FORM_ID",
              "form_id",
              ladingPages[0].form_builder[0].id
            );
            els[i].appendChild(elementFormId);
          }
        }
      }
    }
  }

  useEffect(() => {
    handleForm();
  }, []);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: ladingPage.script_head }}
      />
      <Head>
        <title>{ladingPage.name}</title>
        <link rel="canonical" href={ladingPage.canonical_url} />
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Expires" content="-1" />
        {ladingPage.social_network != null &&
        ladingPage.social_network.length != 0 ? (
          ladingPage.social_network.map((e: any) => {
            if (e.id == 5) {
              return null;
            }
            return <meta key={e.title} name={e.title} content={e.value} />;
          })
        ) : (
          <meta
            name="google-site-verification"
            content="uircGwuoHGCEEnQqTh4YwBMaiL-7LgEeDWBpxDHkprw"
          />
        )}
        <meta
          property="og:image"
          content={LmsUrls.cmsUrl + ladingPage.image}
        ></meta>
        <meta name="keywords" content={ladingPage.tag} />
        <meta name="keywords" content={ladingPage.meta} />
        <meta name="description" content={ladingPage.description} />
        <meta property="og:url" content={ladingPage.url} />
        <meta property="og:title" content={ladingPage.title} />
        <meta property="og:description" content={ladingPage.description} />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <InnerHTML html={ladingPage.html} />
    </>
  );
};

export async function getStaticProps() {
  const ladingPages = await getLadingPage();
  return {
    props: {
      ladingPages: ladingPages,
    },
  };
}

export default HomePage;
