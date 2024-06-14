import Image from "next/image";
import styles from "./style/newsCards.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "../../shared/constant/router";

function NewsCards({ newsInfo }) {
  console.log(newsInfo, "newsInfo");
  const router = useRouter();

  const getCurrentLanguageSlug = (blog) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return blog[currentLanguage];
  };

  const goToNewsDetail = (blog) => {
    const blogId = getCurrentLanguageSlug(blog.slug);
    console.log(blogId, "blogId");
    router.push(`${ROUTER.NEWS}/${blogId}`);
  };

  console.log(newsInfo.blogs, "slug");

  // Reverse the order of news blogs
  const reversedBlogs = [...(newsInfo.blogs || [])].reverse();

  return (
    <section className={styles.newsCardsSect}>
      {reversedBlogs.map((blog, index) => (
        <div className={styles.newsCard} key={index}>
          <div className={styles.newsCardDescription}>
            <h6>{blog.created_at}</h6>
            <h3>{blog.title}</h3>
            <h4>BCG group</h4>
            <div dangerouslySetInnerHTML={{ __html: blog.desc }} />
            <button onClick={() => goToNewsDetail(blog)}>Tam xəbəri oxu</button>
          </div>
          <Image
            className={styles.newsCardImg}
            src={blog.image}
            alt={blog.title}
            width={600}
            height={430}
          />
        </div>
      ))}
    </section>
  );
}

export default NewsCards;
