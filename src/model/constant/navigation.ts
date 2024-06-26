import { IMenuItem } from "../types";

const collection: IMenuItem[] = [
  { title: "Beginner (Thể Thao)", to: "Beginner" },
  { title: "No Style (Gu nào cũng có nè)", to: "No-Style" },
  { title: "Seventy Seven (Trung Tính, Giá Tốt)", to: "Seventy-Seven" },
  { title: "Premium (Vải Cao Cấp)", to: "Premium" },
  { title: "Beginner (Thể Thao)", to: "Beginner" },
  { title: "No Style (Gu nào cũng có nè)", to: "No-Style" },
  { title: "Seventy Seven (Trung Tính, Giá Tốt)", to: "Seventy-Seven" },
  { title: "Premium (Vải Cao Cấp)", to: "Premium" },
  { title: "Beginner (Thể Thao)", to: "Beginner" },
  { title: "No Style (Gu nào cũng có nè)", to: "No-Style" },
  { title: "Seventy Seven (Trung Tính, Giá Tốt)", to: "Seventy-Seven" },
  { title: "Premium (Vải Cao Cấp)", to: "Premium" },
  { title: "Beginner (Thể Thao)", to: "Beginner" },
  { title: "No Style (Gu nào cũng có nè)", to: "No-Style" },
  { title: "Seventy Seven (Trung Tính, Giá Tốt)", to: "Seventy-Seven" },
  { title: "Premium (Vải Cao Cấp)", to: "Premium" },
];

const sales: IMenuItem[] = [
  { title: "Áo Khoác Sale 50%", to: "1" },
  { title: "Áo Sơ Mi Sale 50%", to: "2" },
  { title: "Áo Thun", to: "3" },
  { title: "Áo Polo Sale", to: "4" },
  { title: "Quần Dài Sale", to: "5" },
  { title: "Quần Short Sale", to: "6" },
];

const MegaMenu: IMenuItem[] = [
  {
    title: "Áo Thun",
    to: "1",
    children: [
      {
        title: "Áo Polo",
        to: "2",
      },
    ],
  },
  {
    title: "Áo Sơ Mi",
    to: "2",
    children: [
      {
        title: "Áo Khoác",
        to: "4",
      },
    ],
  },
  {
    title: "Quần Jean",
    to: "1",
    children: [
      {
        title: "Quần Tây",
        to: "2",
      },
    ],
  },
  {
    title: "Quần Kaki, Thun",
    to: "1",
    children: [
      {
        title: "Quần Short",
        to: "2",
      },
    ],
  },
  {
    title: "Quần Lót",
    to: "1",
  },
  {
    title: "Phụ Kiện",
    to: "1",
    children: [
      {
        title: "Dây nịt Da",
        to: "2",
      },
      {
        title: "Ví da",
        to: "2",
      },
      {
        title: "Nón",
        to: "2",
      },
      {
        title: "Tất - Vớ",
        to: "2",
      },
      {
        title: "Khăn",
        to: "2",
      },
      {
        title: "Găng Tay",
        to: "2",
      },
    ],
  },
  {
    title: "Bao Túi",
    to: "1",
    children: [
      {
        title: "Túi đeo",
        to: "2",
      },
      {
        title: "Balo",
        to: "2",
      },
    ],
  },
  {
    title: "Giày dép",
    to: "1",
    children: [
      {
        title: "Giày Da Thật",
        to: "2",
      },
      {
        title: "Giày Casual",
        to: "2",
      },
      {
        title: "Dép",
        to: "2",
      },
    ],
  },
];

export { collection, sales, MegaMenu };
