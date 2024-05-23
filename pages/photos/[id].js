// [id].js
import React from "react";
import { useRouter } from "next/router";

function PhotoModal() {
  const router = useRouter();
  const { id } = router.query;
  const selectedPhotoId = parseInt(id);

  const ImagesObj = {
    1: { photoUrl: "photosSect1.jpg", id: 1, title: "photosSect1.jpg" },
    2: { photoUrl: "photosSect2.jpg", id: 2, title: "photosSect2.jpg" },
    3: { photoUrl: "photosSect3.jpg", id: 3, title: "photosSect3.jpg" },
    4: { photoUrl: "photosSect4.jpg", id: 4, title: "photosSect4.jpg" },
    5: { photoUrl: "photosSect5.jpg", id: 5, title: "photosSect5.jpg" },
    6: { photoUrl: "photosSect6.jpg", id: 6, title: "photosSect6.jpg" },
    7: { photoUrl: "photosSect7.jpg", id: 7, title: "photosSect7.jpg" },
    8: { photoUrl: "photosSect8.jpg", id: 8, title: "photosSect8.jpg" },
    9: { photoUrl: "photosSect9.jpg", id: 9, title: "photosSect9.jpg" },
  };

  const selectedPhoto = ImagesObj[selectedPhotoId];

  if (!selectedPhoto) {
    return <div>Photo not found</div>;
  }

  return (
    <div>
      <img
        src={`/photosPageImg/${selectedPhoto.photoUrl}`}
        alt={selectedPhoto.title}
      />
    </div>
  );
}

export default PhotoModal;
