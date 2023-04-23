import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cloudinary_Image from './cloudinaryAssests'

const Home = () => {

    const [spaceData, setSpaceData] = useState({})
    const [dataReady, setDataReady] = useState(false)
    const testImgLink = spaceData[spaceData.length - 1]?.images[0] || 'loading'

    useEffect(() => {
        const getData = async () => {
            await axios.get('http://localhost:5000/api/space/')
                .then(response => {
                    setSpaceData(response.data)
                    setDataReady(true)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getData()
    }, [])

    return (
        <>
            <div className='jumbotron-fluid bg-primary text-center p-3 text-light'>
                <h3 className='display-6 >'>Welcome! Start your adventures here </h3>
            </div>
            <div className='container py-3'>
                <div className='row'>
                    <div className='col-sm-4 p-3 border'>
                        <h4 className='display-6'>Hotels and Places</h4>
                        {/* {JSON.stringify(spaceData[0])} */}
                        {!dataReady && <p className='fs-4 text-center text-gray-400'>Loading...</p>}
                        {dataReady && spaceData && Array.isArray(spaceData) &&
                            spaceData.map(entry =>
                                <div className='border p-2'>
                                    <h6>{entry.name}</h6>
                                    <p>{entry.description.substring(0, 25)}...</p>
                                    {entry.images.map(imgId =>
                                        <Cloudinary_Image public_id={imgId.toString()} />
                                    )}
                                </div>
                                
                            )}
                    </div>
                    <div className='col-sm-4'>
                        {JSON.stringify(testImgLink)}
                        <Cloudinary_Image public_id={testImgLink} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home