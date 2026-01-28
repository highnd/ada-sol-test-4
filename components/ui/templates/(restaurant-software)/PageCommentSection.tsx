"use client";

import React, { useState } from "react";
import Container from "@/components/ui/container";
import { CommentItem } from "@/data/comments";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

type PageCommentSectionProps = {
    title?: string; // Default: "نظرات کاربران"
    nameLabel?: string; // Default: "نام و نام خانوادگی"
    namePlaceholder?: string; // Default: "نام و نام خانوادگی خود را بنویسید"
    emailLabel?: string; // Default: "ایمیل"
    emailPlaceholder?: string; // Default: "ایمیل خود را بنویسید"
    commentLabel?: string; // Default: "نظر خود را بنویسید"
    commentPlaceholder?: string; // Default: "نظر خود را بنویسید..."
    submitButtonText?: string; // Default: "ثبت"
    comments: readonly CommentItem[]; // Required - array of comments to display
    containerClassName?: string;
    onSubmit?: (data: { name: string; email: string; comment: string }) => void; // Optional callback
};

/**
 * PageCommentSection Component
 *
 * A reusable component for displaying a comment section with:
 * - Upper section: Comment submission form with white background
 * - Lower section: Display of existing comments with bg-accent cards
 *
 * @param title - Section title (default: "نظرات کاربران")
 * @param nameLabel - Label for name input (default: "نام و نام خانوادگی")
 * @param namePlaceholder - Placeholder for name input
 * @param emailLabel - Label for email input (default: "ایمیل")
 * @param emailPlaceholder - Placeholder for email input
 * @param commentLabel - Label for comment textarea (default: "نظر خود را بنویسید")
 * @param commentPlaceholder - Placeholder for comment textarea
 * @param submitButtonText - Submit button text (default: "ثبت")
 * @param comments - Array of comments to display (required)
 * @param containerClassName - Optional custom className for container
 * @param onSubmit - Optional callback when form is submitted
 */
const PageCommentSection: React.FC<PageCommentSectionProps> = ({
    title = "نظرات کاربران",
    nameLabel = "نام و نام خانوادگی",
    namePlaceholder = "نام و نام خانوادگی خود را بنویسید",
    emailLabel = "ایمیل",
    emailPlaceholder = "ایمیل خود را بنویسید",
    commentLabel = "نظر خود را بنویسید",
    commentPlaceholder = "نظر خود را بنویسید...",
    submitButtonText = "ثبت",
    comments,
    containerClassName,
    onSubmit,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
        // Reset form after submission
        setFormData({ name: "", email: "", comment: "" });
    };

    return (
        <div className="w-full" dir="rtl">
            <Container className={containerClassName}>
                {/* Upper Section - Form with White Background */}
                <div className="w-full bg-white rounded-2xl sm:rounded-3xl  mb-8 lg:mb-12 ">
                    <h2 className="extrabold-fanum-font text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#0A2745] mb-6 lg:mb-16 text-right">
                        {title}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 sm:space-y-5 lg:space-y-6"
                    >
                        {/* Name and Email in 2 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                            {/* Name Input */}
                            <div className="flex  flex-col gap-4">
                                <label
                                    htmlFor="comment-name"
                                    className="fanum-font text-sm sm:text-base text-[#0A2745] text-right flex items-center gap-2 justify-start"
                                >
                                    <FaUser className="text-primary text-xl" />
                                    {nameLabel}
                                </label>
                                <input
                                    type="text"
                                    id="comment-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={namePlaceholder}
                                    className="w-full bg-white  text-[#0A2745] rounded-full px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base fanum-font placeholder:text-gray-500 text-right ring-2 ring-gray-400 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4C00] focus:ring-offset-2 focus:ring-offset-white"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-4">
                                <label
                                    htmlFor="comment-email"
                                    className="fanum-font text-sm sm:text-base text-[#0A2745] text-right"
                                >
                                    {emailLabel}
                                </label>
                                <input
                                    type="email"
                                    id="comment-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={emailPlaceholder}
                                    className="w-full bg-white  text-[#0A2745] rounded-full px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base fanum-font placeholder:text-gray-500 text-right ring-2 ring-gray-400 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4C00] focus:ring-offset-2 focus:ring-offset-white"
                                    required
                                />
                            </div>
                        </div>

                        {/* Comment Textarea - Full width */}
                        <div className="flex  flex-col gap-4">
                            <label
                                htmlFor="comment-text"
                                className="fanum-font text-sm sm:text-base text-[#0A2745] text-right"
                            >
                                {commentLabel}
                            </label>
                            <input
                                id="comment-text"
                                name="comment"
                                value={formData.comment}
                                onChange={handleInputChange}
                                placeholder={commentPlaceholder}
                                className="w-full bg-white  text-[#0A2745] rounded-full px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base fanum-font placeholder:text-gray-500 text-right ring-2 ring-gray-400 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4C00] focus:ring-offset-2 focus:ring-offset-white"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-start pt-2">
                            <button
                                type="submit"
                                className="bg-[#FF4C00] cursor-pointer text-white rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg bold-fanum-font  hover:bg-[#E64500] transition-colors duration-200  "
                            >
                                {submitButtonText}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Lower Section - Comments Display */}
                <div className="w-full mt-8 lg:mt-12">
                    <div className="flex  flex-col gap-4 sm:gap-5 lg:gap-6">
                        {comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="w-full bg-accent rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm transition-shadow duration-200"
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    {/* Avatar */}
                                    <div className="shrink-0">
                                        {comment.avatarSrc ? (
                                            <Image
                                                src={comment.avatarSrc}
                                                alt={comment.name}
                                                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gray-300 flex items-center justify-center">
                                                <span className="text-gray-600 text-xs sm:text-sm font-bold">
                                                    {comment.name.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex lg:flex-row lg:items-center  gap-2 flex-col ">
                                            <h3 className="bold-fanum-font text-sm sm:text-base lg:text-lg text-[#0A2745] mb-1">
                                                {comment.name}
                                            </h3>
                                            <p className="fanum-font text-xs sm:text-sm text-[#0A2745] lg:mb-0 mb-2">
                                                {comment.role}
                                            </p>
                                        </div>
                                        <p className="fanum-font text-xs text-gray-500 mb-3">
                                            {comment.date}
                                        </p>
                                        <p className="fanum-font text-xs sm:text-sm text-gray-600 leading-relaxed">
                                            {comment.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageCommentSection;
