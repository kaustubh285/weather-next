"use client";
import Image from "next/image";
import CityPicker from "@/components/CityPickercomponents";
import { Card, Divider, Input, Stack, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className=' min-h-screen bg-gradient-to-br from-[#394f68] to-[#183b7e] flex items-center justify-center'>
      <Link
        className='underline'
        href={"https://github.com/kaustubh285"}
        target='_blank'>
        <Tooltip
          hasArrow
          bg='gray.300'
          color='black'
          label='Kaustubh:Github'
          fontSize='md'>
          <Image
            className='block absolute right-0 top-0'
            style={{
              filter: "drop-shadow(5px 5px 5px rgb(0 0 0))",
            }}
            src='/me.png'
            width={120}
            height={120}
            alt='Picture of the author'
          />
        </Tooltip>
      </Link>
      <Card
        className=' relative w-7/12 text-center p-3 shadow-lg shadow-black border-sm min-w-fit mx-auto bg-white mb-44 h-min'
        style={{
          minWidth: "350px",
        }}>
        <div className='flex justify-center items-center'>
          {/* <Link
            className='underline'
            href={"https://github.com/kaustubh285"}
            target='_blank'>
            <Tooltip
              hasArrow
              bg='gray.300'
              color='black'
              label='Kaustubh:Github'
              fontSize='md'>
              <Image
                className='md:block absolute right-0 top-0'
                style={{
                  filter: "drop-shadow(5px 5px 5px rgb(0 0 0))",
                }}
                src='/me.png'
                width={120}
                height={120}
                alt='Picture of the author'
              />
            </Tooltip>
          </Link> */}
          <Text
            // fontSize={"5xl md:3xl"}
            className=' text-xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-400'>
            Tail-Wind-Tempest
          </Text>
        </div>
        <Text
          as='sub'
          className='text-sm md:text-xl font-bold text-gray-500 dark:text-gray-400'>
          A Weather App built using Next | Open-Mateo | GraphQL | Hosted on
          Vercel
        </Text>

        <Text
          as='p'
          className=' text-sm md:text-xl font-bold text-gray-500 dark:text-gray-400 pt-2'>
          {/* <div className=' text-white px-3 py-0 text-right font-semibold'> */}
          Built by{" "}
          <Link
            className='underline'
            href={"https://github.com/kaustubh285"}
            target='_blank'>
            {" "}
            Kaustubh Deshpande
          </Link>
          {/* </div> */}
        </Text>

        <Divider className='my-5 md:my-10' />

        <Card className='bg-gradient-to-br from-[#394f68] to-[#183b7e] shadow-2xl text-justify p-3 mb-5'>
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
