import CardBus from "@/components/InfoRaise/CardBus";
// import { dataRaises } from "@/components/Table_Flights/data/data";

import { GetStaticProps } from "next";

import { NextPage } from "next";
import { useRouter } from "next/router";

const RaisePage: NextPage = () => {

    const router = useRouter()




    return (
        <>
            {/* <CardBus raise={} /> */}
        </>
    );

}

export default RaisePage

// export const getStaticPaths = () => {
//     return {
//         paths: [
//             { params: { id: '1' } },
//         ],
//         fallback: true,
//     }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//     try {
//         const dataTarget = await dataRaises.find((raise) => context.locale as string === String(raise._id))
//         console.log(context.locale)
//         return {
//             props: { raise: dataTarget }
//         }

//     } catch (error) {
//         console.error(error);
//         return { props: {} }
//     }


// };