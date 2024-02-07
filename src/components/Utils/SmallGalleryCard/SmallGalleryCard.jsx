import s from "./style.module.css";

export function SmallGalleryCard({image}) {
  return (
    <div className={`${s.card}`}>
      <img className={s.image} src={image} alt="Card image" />
    </div>
  );
}
