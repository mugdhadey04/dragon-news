import React, { useState } from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {

    const [showFullText, setShowFullText] = useState(false);

    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;

    const MAX_TEXT_LENGTH = 200;
    const showReadMore = details.length > MAX_TEXT_LENGTH;
    const previewText = showFullText ? details : details.slice(0, MAX_TEXT_LENGTH);

    // Format date
    const formattedDate = new Date(news.author.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="bg-white rounded-lg mx-4 shadow-md  space-y-3 text-gray-700 my-2">
            <div className="flex justify-between rounded-t-lg items-center bg-base-300">
                <div className="flex items-center gap-3 p-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className='flex gap-2 pr-3 items-center'>
                    <CiBookmark size={20} className='hover:text-black'/>
                    <FaShareAlt className="text-gray-500 hover:text-black cursor-pointer" />
                </div>
            </div>
            <div className='px-4 pb-5'>
                <h2 className="text-lg font-bold">{title}</h2>
                <img src={thumbnail_url} alt="news thumbnail" className="rounded-md w-full object-cover" />
                <p className="text-sm text-gray-600">
                    {previewText}
                    {showReadMore && !showFullText && (
                        <span
                            onClick={() => setShowFullText(true)}
                            className="text-orange-600 font-semibold cursor-pointer ml-1"
                        >
                            Read More
                        </span>
                    )}
                </p>

                <div className="flex justify-between items-center pt-2 border-t mt-3">
                    <div className="flex items-center gap-1 text-orange-500">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar key={i} className={i < Math.round(rating.number) ? 'fill-orange-500' : 'text-gray-300'} />
                        ))}
                        <span className="ml-1 text-gray-800 font-medium">{rating.number}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                        <FaEye /> <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;