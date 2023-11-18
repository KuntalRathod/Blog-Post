
import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import CircularProgress from '@mui/material/CircularProgress';
import authService from '../appwrite/auth';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data...');
                const user = await authService.getCurrentUser();
                const userLoggedIn = !!user;
                setIsLoggedIn(userLoggedIn);

                if (!userLoggedIn) {
                    return;
                }

                const fetchedPosts = await appwriteService.getPosts([]);
                if (fetchedPosts) {
                    console.log('Data fetched successfully:', fetchedPosts.documents);
                    setPosts(fetchedPosts.documents);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                console.log('Setting loading to false.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);      //moved isLoggedIn from the dependency array


    if (loading) {
        return (
            <div className='w-full py-8'>
                <Container>
                    {/* Display a loading spinner */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                        <CircularProgress />
                    </div>
                </Container>
            </div>
        );
    }



    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home