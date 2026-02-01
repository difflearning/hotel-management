import styled, { keyframes } from "styled-components";
import React from "react";  
import PropTypes from "prop-types";

/* ================== */
/* Shimmer Animation */
/* ================== */
const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

/* ================== */
/* Skeleton Block */
/* ================== */
const Skeleton = styled.div`
  height: ${(props) => props.height || "1.6rem"};
  width: ${(props) => props.width || "100%"};
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    var(--color-grey-100) 25%,
    var(--color-grey-200) 37%,
    var(--color-grey-100) 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.6s ease-in-out infinite;
  /* optional subtle fade */
  opacity: 0.9;
`;

/* ================== */
/* Skeleton Row */
/* ================== */
const SkeletonRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  /* prevent horizontal overflow */
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`;

/* ================== */
/* PropTypes */
/* ================== */
CabinTableSkeleton.propTypes = {
  rows: PropTypes.number,
};


/* ================== */
/* Skeleton Wrapper */
/* ================== */
const SkeletonWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* allow table scroll if needed */
`;

/* ================== */
/* Component */
/* ================== */
function CabinTableSkeleton({ rows = 5 }) {
  return (
    <SkeletonWrapper>
      {Array.from({ length: rows }).map((_, index) => (
        <SkeletonRow key={index}>
          {/* Image */}
          <Skeleton width="6.4rem" height="4.2rem" />

          {/* Cabin name */}
          <Skeleton />

          {/* Capacity */}
          <Skeleton width="70%" />

          {/* Price */}
          <Skeleton width="60%" />

          {/* Discount */}
          <Skeleton width="50%" />

          {/* Actions */}
          <Skeleton width="80%" />
        </SkeletonRow>
      ))}
    </SkeletonWrapper>
  );
}


export default CabinTableSkeleton;
