import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Reviews = ({ reviews }) => {
  const [showReviews, setShowReviews] = useState(false);

  // const handleShowReviews = () => {
  //   setShowReviews(!showReviews);
  // };
  const handleShowReviews = () => {
    if (!showReviews) {
      document.body.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    } else {
      document.body.removeEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    }
    setShowReviews(!showReviews);
  };
  
  return (
    <>
      <button onClick={handleShowReviews}>Reviews</button>
      <Modal
        isOpen={showReviews}
        onRequestClose={handleShowReviews}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '100% !important',
            height: '40% !important',
            border:'2px solid green'
          },
        }}
      >
        <button onClick={handleShowReviews}>Close</button>
        {reviews.map((review) => (
          <div key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default Reviews;
