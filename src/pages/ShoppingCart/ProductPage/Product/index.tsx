import { FC } from "react";
import { IProps } from "./types";
import "./styles.scss";
import useProduct from "./useProduct";
import Tabs from "@/components/Tabs";
import withLoader from "@/components/withLoader";



const Product:FC<IProps> = (props) => {
  const {
    product,
    likes, lastLike,
    handleAddClick, handleLikeClick
  } = useProduct(props);

  if (!product) return null;

  return (
    <>
      <h1>{product.name}</h1>
      <Tabs>
        <Tabs.Tab
          name="Description"
          initialActive={true}
          heading={() => <b>Description</b>}
        >
          <p>{product.description}</p>
        </Tabs.Tab>

        <Tabs.Tab
          name="Reviews"
          heading={() => <b>Reviews</b>}
        >
          <ul className="product-reviews">
            {product.reviews.map(review => (
              <li key={review.reviewer}
              className="product-reviews-item">
                <i>"{review.comment}</i> - {review.reviewer}
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      </Tabs>

      <p className="product-price">
        {new Intl.NumberFormat("en-US",{
          currency:"USD",
          style:"currency"
        }).format(product.price)}
      </p>
      {!props.inBasket && (
        <button onClick={handleAddClick}>
          Add to basket
        </button>
      )}
      <div className="like-container">
        {likes > 0 && (
          <div>{`like this x ${likes}, last at ${lastLike}`}</div>
        )}
        <button onClick={handleLikeClick}>{likes > 0 ? "Like again" : "Like"}</button>
      </div>
    </>
  )
}

export default withLoader<IProps>(Product);