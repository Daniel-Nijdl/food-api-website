// import React from "react";
// import { useObjectContext } from "../util/context";
// // import { Link } from "react-router-dom";

// const Objects = () => {
//   const { objects, loading, removeObject } = useObjectContext();

//   if (loading) {
//     return <div className="loading"></div>;
//   }
//   return (
//     <section className="objects">
//       <div className="button-container">
//         <button className="pageButton">Prev</button>
//         <p className="numPages">0 of 50</p>
//         <button className="pageButton">Next</button>
//       </div>
//       {console.log(objects)}
//       {objects.map((object) => {
//         const {
//           title,
//           artistDisplayName: artistName,
//           department,
//           culture,
//           artistNationality: artistNat,
//           objectName,
//           country,
//           gender,
//           objectID: id,
//           primaryImage,
//         } = object;

//         return (
//           // <Link to={`/articles/${id}`} key={id} className="article">
//           <article key={id} className="object">
//             <h3 className="title">{title}</h3>
//             <div className="object-info">
//               <img src={primaryImage} alt={title} />
//               <h4>{objectName}</h4>
//               <h4>{`Artist: ${artistName}`}</h4>
//               <p>{`Gender: ${gender}`}</p>
//               <h5>{`Nationality: ${artistNat}`}</h5>
//               <p>{`Department: ${department}`}</p>
//               <p>{`Culture: ${culture}`}</p>
//               <p>{`Country of Origin: ${country}`}</p>
//             </div>
//             <button className="remove-btn" onClick={() => removeObject(id)}>
//               Remove
//             </button>
//           </article>
//           // </Link>
//         );
//       })}
//     </section>
//   );
// };

// export default Objects;

// import React from "react";
// import { useArticleContext } from "../util/context";
// // import { Link } from "react-router-dom";

// const Objects = () => {
//   const { loading, objects, removeObject } = useArticleContext();

//   if (loading) {
//     return <div className="loading"></div>;
//   }
//   return (
//     <section className="articles">
//       {/* <div className="button-container">
//         <button className="pageButton">Prev</button>
//         <p className="numPages">0 of 50</p>
//         <button className="pageButton">Next</button>
//       </div> */}
//       {objects.map((object) => {
//         const {
//           author,
//           objectID: id,
//           title,
//           url,
//           points,
//           num_comments,
//         } = object;

//         return (
//           // <Link to={`/articles/${id}`} key={id} className="article">
//           <article key={id} className="article">
//             <h4 className="title">{title}</h4>
//             {/* <div className="article-info"> */}
//               <p>{`${points} points by ${author} | ${num_comments} comments`}</p>
//               <div className="read-more-div">
//               <a href={url} className="read-more" target='_blank' rel="noopener noreferrer">
//                 Read More
//               </a>
//               </div>
//               <button className="remove-btn" onClick={() => removeObject(id)}>
//                 Remove
//               </button>
//             {/* </div> */}
//           </article>
//           // </Link>
//         );
//       })}
//     </section>
//   );
// };

// export default Objects;

import React from "react";
import { useArticleContext } from "../util/context";

const Objects = () => {
  const { articles, loading } = useArticleContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="articles">
      {articles.map((article) => {
        const {
          totalHits,
          description,
          score,
          brandOwner,
          brandName,
          ingredients,
          marketCountry,
          foodCategory,
          fdcId: id,
        } = article;

        return (
          // <Link to={`/movies/${id}`} key={id} className="movie">
          <article key={id} className="article">
            <p>{totalHits}</p>
            <div className="article-info">
              <div className="title-div">
                <h3 className="title">
                  {brandName} {description}
                </h3>
              </div>
              <div className="extra-info">
                <h4>Brand Owner: {brandOwner}</h4>
                <p>Ingredients: {ingredients}</p>
                <p>Market Country: {marketCountry}</p>
                <p>Catergory: {foodCategory}</p>
                <p>Score: {score} points</p>
              </div>
            </div>
          </article>
          // {/* </Link> */}
        );
      })}
    </section>
  );
};

export default Objects;
