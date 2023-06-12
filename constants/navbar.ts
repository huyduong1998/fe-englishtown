import { NavbarType } from "types/navbar";

export const NAVBAR_DATA: NavbarType[] = [
  // {
  //   id: "e2bbc070-16e1-59da-aede-6272a4caa8f6",
  //   title: "Về English Town",
  //   prefix: "/about-us",
  //   children: [],
  // },
  // {
  //   id: "fb114062-ccda-5660-9246-dedc785a3067",
  //   title: "Khoá học",
  //   prefix: "/courses",
  //   children: [],
  // },
  // {
  //   id: "b4a96ad9-c59b-5593-8386-c15eee01f128",
  //   title: "Chương trình đặc biệt",
  //   prefix: "/special-programs",
  //   children: [],
  // },
  // {
  //   id: "a2aad4a9-e906-5e9f-9548-5b5c2cfb6793",
  //   title: "Sự kiện",
  //   prefix: "/event",
  //   url: "/event",
  // },
  {
    id: "948d6852-6034-5538-9822-89600c6a8c3c",
    title: "Giáo trình online",
    prefix: "/online-course",
    url: "/online-course",
  },
  {
    id: "84b06fa1-2b93-518f-b9f2-65d4d0e33e31",
    title: "Thư viện",
    prefix: "/libraries",
    children: [
      {
        id: "43ab494e-d301-5d5f-992a-e1f0328b000c",
        title: "Từ vựng",
        prefix: "/libraries",
        url: "/",
      },
      {
        id: "02aa321c-9b65-5025-ac7f-2b52e16b9aa3",
        title: "Ngữ pháp",
        prefix: "/libraries",
        url: "/",
      },
      {
        id: "57359ee6-9921-5df6-9c84-0dc30208eac9",
        title: "Mẫu câu",
        prefix: "/libraries",
        url: "/",
      },
    ],
  },
  {
    id: "0a5dcc83-706c-5c76-98dd-aded5b3ec39a",
    title: "Lịch học",
    prefix: "/schedule",
    url: "/schedule",
  },
];
