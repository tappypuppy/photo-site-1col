import Link from "next/link";
import styles from "./Detail.module.css";
import Image from "next/image";

function Detail() {
  return (
    <section className={styles.detail}>
      <h2 className={styles.title}>DETAIL</h2>
      <div className={styles.contents}>
        <Image
          className={styles.content_img}
          src="/detail_1.png"
          alt="detail"
          width={270}
          height={270}
        />
        <div className={styles.content_texts}>
          <h3 className={styles.item_title}>
            タイトルタイトルタイトル
          </h3>
          <dl className={styles.content_data}>
            <dt>著者</dt>
            <dd>タイトルタイトルタイトル</dd>
            <dt>出版社</dt>
            <dd>タイトルタイトルタイトル</dd>
            <dt>発行年</dt>
            <dd>タイトルタイトルタイトル</dd>
          </dl>
          <p>
            テキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
          </p>
          <Link className={styles.content_link} href="/detail">オンラインストアで見る</Link>
        </div>
      </div>
    </section>
  );
}

export default Detail;
