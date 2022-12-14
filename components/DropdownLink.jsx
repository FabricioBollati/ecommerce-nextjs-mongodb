import Link from 'next/link';
import React from 'react'

export const DropdownLink = (props) => {
    let { href, children, ...rest } = props;
  return (
    <Link href={href} {...rest}>
        {children}
    </Link>
  )
}
