import React from 'react';
import Header from "./header";

export const PageContainer=({children, headerTitle})=>{
    return <>
    <Header />
    {children}
    {/* <Footer /> */}
    </>
  }
