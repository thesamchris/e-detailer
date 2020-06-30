import React from 'react'
import { Link } from 'react-router-dom'
import './right.css'
const Right = ({ link }) => (
	<div>
		<Link to={link} target="_self" className="cta cta-right hol text-uppercase on-dark" style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271" className="exagon">
          <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
            <path className="background exagon" d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" />
            <path className="foreground right" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)" />
          </g>
        </svg>
      </Link>
	</div>
)

export default Right