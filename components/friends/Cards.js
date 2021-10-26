import React from 'react';

export default function Cards({ children, className = '' }) {
	return <ul className={`flex flex-wrap ${className}`}>{children}</ul>;
}
