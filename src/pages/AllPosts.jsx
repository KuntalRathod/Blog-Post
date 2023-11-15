import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import CircularProgress from '@mui/material/CircularProgress';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const user = await appwriteService.getCurrentUser();
                if (user) {
                    const userId = user.$id;
                    const fetchedPosts = await appwriteService.getPosts({ filters: [`userId=${userId}`] });

                    if (fetchedPosts) {
                        setPosts(fetchedPosts.documents);
                    }
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

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
            <div className='w-full py-8'>
                <Container>
                    <h1 className='text-2xl font-bold'>No Posts Found</h1>
                </Container>
            </div>
        );
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
    );
}

export default AllPosts;
