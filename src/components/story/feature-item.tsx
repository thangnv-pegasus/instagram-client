'use client'

import Link from "next/link";
import Avatar from "../users/avatar";

const FeatureItem = () => {
  return <Link href={''}>
    <Avatar type="border" size="normal" borderColor="gray" />

  </Link>;
};

export default FeatureItem;
