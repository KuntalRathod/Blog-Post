import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';


function PostCard({ $id, title, featuredImage }) {
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        const fetchFilePreview = async () => {
            try {
                const preview = await appwriteService.getFilePreview(featuredImage);
                setPreviewUrl(preview);
            } catch (error) {
                console.error("Error fetching preview:", error);
                // Handle errors, set a default preview, or take appropriate action
            }
        };

        fetchFilePreview();
    }, [featuredImage]);

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {previewUrl ? (
                        <img src={previewUrl} alt={title} className='rounded-xl' />
                    ) : (
                        <div>Loading...</div>
                        /* You can add a placeholder for when the preview is being fetched */
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;