import React, { useState } from "react";
import styles from "./servicesPageBoxes.module.css";
import Image from "next/image";
import style from "../ServicesPageSection1/servicesPage.module.css";
function ServicesPageBoxes() {
  const [hoveredBox, setHoveredBox] = useState("İşçi briqada");
  const [selectedBox, setSelectedBox] = useState(0);
  const handleClick = (index, text) => {
    setSelectedBox(index);
    setHoveredBox(text);
    setBoxBackgroundColor("var(--mainBlue)");
  };

  const [boxBackgroundColor, setBoxBackgroundColor] = useState(
    "var(--projectBoxGray)"
  );
  const descriptions = {
    "Optik kabellərin çəkilməsi":
      "Fiber optik quraşdırma binaya yüksək sürətli interneti çatdırmaq üçün fiber optik kabellərin çəkilməsini nəzərdə tutur. Dünyadakı internet bağlantılarının çoxu şəhərlər və ölkələr arasında işləyən fiber optik kabellərə əsaslanır. Bununla belə, yaşayış məntəqələrində və biznes rayonlarında fiber optik quraşdırma da mümkündür.Fiber optik quraşdırma biznesiniz üçün yüksək performanslı şəbəkə təklif edir. Bu, mis kabel ilə qəbul etdiyiniz elektromaqnit müdaxilənin daha az imkanını və daha çox ötürmə qabiliyyətini təmin edir. Şəbəkə Quraşdırıcıları biznesinizin asılı olduğu xidmətin sürətini və etibarlılığını təmin etmək üçün müxtəlif kabel quraşdırma xidmətlərində ixtisaslaşır. Biz fiber optik birləşdirmə, kabel təmiri təklif edirik və həmçinin fiber optik kabellərinizin bütövlüyünü təmin etmək üçün şəbəkənin müntəzəm auditini həyata keçiririk.Fiber optik kabellər tələblərinizdən asılı olaraq açıq havada və ya qapalı yerlərdə çəkilir. Xarici fiber optik quraşdırma üçün, fiber optik kabel tez-tez kanallarda aparılır və ya birbaşa basdırılır. Körpü, yol və ya su yolundan keçmək üçün sizə lif lazım ola bilər; bu ssenaridə fiber optik kabellər elektrik ötürülməsindən çox işıq şüalarına güvəndikləri üçün elementlərə tab gətirə bilər.Daxili fiber optik quraşdırma üçün fiber optik kabel tez-tez mövcud boru kəmərindən keçir. Siz həmçinin plenum boşluqlarında, tavandan asılmış və ya qaldırılmış döşəmənin altındakı kabel lövhələrinə yerləşdirə bilərsiniz.Hər iki halda, fiber optik quraşdırmanızın yol xəritəsini hazırlamaq üçün Şəbəkə Quraşdırıcılarının təcrübəsinə ehtiyacınız olacaq.",
    "Nişan dirəklərin istehsalı və quraşdırılması":
      "İşarələr gündəlik həyatımıza təsir edən məlumatları çatdırmaq vəzifəsini daşıyır. Aydınlıq, görünürlük və ardıcıllıq vacib keyfiyyətlərdir, istər yol qaydalarını əks etdirən yol nişanı, istərsə də potensial müştərilərə içəridən nə gözlədiyini bildirən iş nişanı olsun. Buna görə şirkətlərin ətraflı brendinq qaydaları var və əyalət və federal qaydalar küçə nişanları üçün xüsusi tələbləri ehtiva edir.YOL İŞARƏTİBiz retroreflektorlu və işıqlı yol nişanları, ADA tələblərinə uyğun dayanacaq nişanları, nəqliyyat vasitələrini müvafiq istiqamətə yönəltmək üçün bələdçi nişanlar və yol işləri aparılan ərazilərdə və fövqəladə hallarda istifadə üçün müvəqqəti yol hərəkətinə nəzarət nişanlarını təchiz edib quraşdıra bilərik. Biz həmçinin lövhənizi istədiyiniz yerdə yerləşdirməyi asanlaşdıran kvadrat, u-kanal və taxta montaj postları da satırıq.XÜSUSİ İŞARƏTLƏRİşarələrin istehsalı sahəsində təcrübəmiz yol nişanlarından kənara çıxır. Biz bizneslər, qeyri-kommersiya təşkilatları və digər müştərilər üçün fərdi bannerlər və digər lövhələr hazırlamaq və çap etmək üçün tam ixtisaslıyıq. Biz ən son rəqəmsal çap texnologiyasından istifadə edərək aşağı qiymətə yüksək keyfiyyətli məhsullar yaradırıq və lazım olduqda yerində quraşdırma və texniki dəstək ilə satdığımız hər şeyin ehtiyat nüsxəsini çıxarırıq. İstər yol nişanları, bannerlər və ya laminatlı rəqəmsal qrafika olsun, biz sizin ehtiyaclarınız üçün məhsul və proseslərin ən yaxşı birləşməsini tapa bilərik. Vinil bannerlərimiz açıq havada istifadə üçün kifayət qədər davamlıdır və tipik ömür müddəti 12 ilə qədərdir. Brend tələblərinizə cavab vermək və ya tikinti tətbiqləri üçün dövlət magistral departamentinin tövsiyələrini yerinə yetirmək üçün rəng uyğunluğunda üstünük.XİDMƏT VƏ BAXIMİşarənizi quraşdırdıqdan sonra ona təzə görünüş vermək üçün təmizlik, rəngləmə və ya zımpara və ya işıq işarələri, lampanın dəyişdirilməsi və elektrik işləri üçün davamlı dəstək verə bilərik. İşarə yaşlandıqca, biz daha geniş bərpa xidmətləri göstərə və ya onu köhnəsindən fərqlənməyən yenisi ilə əvəz edə bilərik.",
    "Quyu qapaqların istehsalı və quraşdırılması":
      "Kanalizasiya qapaqları və çərçivələri axtarırsınızsa, doğru yerə gəldiniz. Müraciətiniz nə olursa olsun, biz kömək edə bilərik. Burada, Lyuk Qapaqları Direct-də biz müştərilərimizə ehtiyaclarınıza uyğun gələn mükəmməl lyuk qapağı və çərçivə ilə təmin etməyə çalışırıq. Mühəndislərimiz lyuk qapaqları və çərçivələri və ya hər hansı digər məhsullarımızı sifariş etmək üçün sifariş vermək üçün sizinlə birbaşa işləyirlər. Biz sizin məlumatınızı alırıq, ehtiyaclarınıza uyğun olaraq örtüyü dizayn edirik, satışı tamamlamazdan əvvəl təsdiq rəsmini və rəsmi təklif göndəririk.Biz geniş çeşiddə lyuk qapaqları, çərçivələr və contalar, aparatlar və xüsusi hazırlanmış həllər kimi aksessuarlar təklif edirik. Lyuk Qapaqları Direct müxtəlif materiallarda, formalarda və ölçülərdə demək olar ki, istənilən həlli həll edə bilər. Bu gün bizə zəng edin və ya layihəniz üçün keyfiyyətli məhsullarımızı əldə etmək üçün qiymət təklifinə başlayın.",
    "İşçi briqada":
      "İşçi və ya Ümumi İşçi, tikinti sahəsində gündəlik əməliyyatlara kömək etmək üçün müxtəlif vəzifələri yerinə yetirmək üçün məsuliyyət daşıyır. Onların vəzifələrinə alətlərin və ya xammalın yüklənməsi və boşaldılması, iskele və ya digər avadanlıqların yığılması və tikinti prosesi boyunca çuxurların qazılması və ya doldurulması daxildir.İşçinin vəzifə və öhdəlikləri həm təmiz, təhlükəsiz və səmərəli tikinti sahəsini saxlamağa, həm də ümumi layihəni dəstəkləməyə yönəldilmişdir. Hər hansı bir gündə işçinin vəzifə və öhdəliklərinin siyahısına aşağıdakılar daxil ola bilər:Tikinti sahələrinin təmizlənməsi və hazırlanması, materialların və avadanlıqların yüklənməsi və boşaldılması, iskele və müvəqqəti strukturların tikintisi və sökülməsi, xəndəklərin qazılması, torpağın sıxılması və çuxurların doldurulması, maşınların və ağır avadanlıqların istismarı və onlara qulluq edilməsi, nəzarətçilərin göstərişlərinə əməl etmək və tikinti planlarını həyata keçirmək, bacarıqlı iş adamlarına öz vəzifələrini yerinə yetirməkdə köməklik etmək.",
  };

  const handleMouseEnter = (text, color) => {
    setHoveredBox(text);
    setBoxBackgroundColor(color);
  };

  const handleMouseLeave = () => {
    setHoveredBox("İşçi briqada");
    setBoxBackgroundColor("var(--projectBoxGray)");
  };

  const truncateText = (text) => {
    const maxLength = 300;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <section className={styles.servicesBoxContainer}>
      <div  className={styles.aboutSectContainer}>
      <div className={style.aboutSectContainer} >
        <div className={style.aboutSectBox} data-aos="fade-right">
          <h2>
            {selectedBox !== null &&
              truncateText(Object.keys(descriptions)[selectedBox])}
          </h2>
          <p>
            {selectedBox !== null &&
              truncateText(Object.values(descriptions)[selectedBox])}
          </p>
        </div>
        <div className={style.aboutSectImage}>
          <Image
            style={{ width: "1500px", height: "530px" }}
            src="/images/servicesPageSect1.jpg"
            width={1000}
            height={900}
          />
        </div>
      </div>
      </div>

      <div className={styles.servicesBoxes} >
        {Object.keys(descriptions).map((text, index) => (
          <div
            key={index}
            className={`${styles.servicesBox} ${
              selectedBox === index
                ? styles.selected
                : hoveredBox === text
                ? styles.hovered
                : ""
            }`}
            onClick={() => handleClick(index, text)}
            onMouseEnter={() => handleMouseEnter(text, "var(--mainBlue)")}
            onMouseLeave={() => handleMouseLeave()}
            
          >
            <p>[ {index + 1} ]</p>
            <Image
              src={`servicesPageIcons/servicesIcon${index + 1}.svg`}
              width={100}
              height={100}
            />
            <h6>{text}</h6>
          </div>
        ))}
      </div>

      <div
        className={styles.servicesBoxDescription}
        style={{
          backgroundColor:
            selectedBox !== null && selectedBox % 2 === 0
              ? "var(--mainBlue)"
              : "var(--projectBoxGray)",
        }}
      >
        {selectedBox !== null && (
          <>
            <h6>{Object.keys(descriptions)[selectedBox]}</h6>
            <p>{Object.values(descriptions)[selectedBox]}</p>
          </>
        )}
      </div>
    </section>
  );
}

export default ServicesPageBoxes;
