import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "ホームページを開設しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/12/01",
      createdAt: "2024/12/01",
    },
    {
      id: "2",
      title: "新しく車仕入れました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/12/01",
      createdAt: "2024/12/01",
    },
    {
      id: "3",
      title: "テスト記事",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/12/01",
      createdAt: "2024/12/01",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  //試しにJavascriptの定数を書いてみた

  //Javascriptを書いたり参照するには{}で囲むのよ

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>
            車選びに、安心と信頼を。長年の実績が証明します。
          </h1>
          <p className={styles.description}>
            私たちは25年にわたり、お客様一人ひとりに寄り添った中古車選びをサポートしてきました。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
