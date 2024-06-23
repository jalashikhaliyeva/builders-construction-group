import styles from "./newsTitle.module.css";
import Image from "next/image";

function NewsTitleSection({ newsInfo }) {
  // console.log(newsInfo, "newsInfo");
  const about = newsInfo?.component;
  // console.log(about, "about");
  const truncateText = (text, maxLength) => {
    if (text?.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };
  return (
    <>
      <div  className={styles.aboutSectContainer}>
        <div style={{height:"420px"}} className={styles.aboutSectBox} data-aos="fade-right">
          <h2>{about?.title}</h2>
          <p style={{fontSize:"16px" , lineHeight:"26px"}}>{truncateText(about?.desc, 500)}</p>
        </div>
        <div className={styles.aboutSectImage}>
          <Image style={{borderRadius:"16px"}} src={about?.image} width={1000} height={900} />
        </div>
      </div>
    </>
  );
}

export default NewsTitleSection;
