"use client";

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");

  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);

    if (photo) setImageOfModal(photo.url);
      setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-3">
      <h1 className="my-10 text-5xl font-bold text-center">
        Fotos intergalacticas
      </h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {photoList.map((item) => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          ></PhotoItem>
        ))}
      </section>
      {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
    </div>
  );
};

export default Gallery;
