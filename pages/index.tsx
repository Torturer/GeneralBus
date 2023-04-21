import dynamic from 'next/dynamic'
import React from 'react'

const Home = dynamic(() => import('@/components/home/Home'))

export default function HomePage(): JSX.Element { return <Home /> }
