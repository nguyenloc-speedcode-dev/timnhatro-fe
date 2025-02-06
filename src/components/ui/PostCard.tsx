'use client'

import React from 'react'

const PostCard = () => {
    return (
        <div className="bg-white p-2 md:p-4 rounded-lg shadow-sm border mb-4" id="">
            <div
                className="flex items-center space-x-2 cursor-pointer"
            >
                <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://fphouse.cdn.vccloud.vn/ed4aa208-69fa-40e3-bcb3-47a51a31e8ff/PROFILE/PROFILE/2025-01-08 09 26 58_thumbnail_st.jpg"
                    alt="User"
                />
                <div>
                    <p className="font-bold"> NM House</p>
                    <p className="text-sm text-gray-500">
                        <span className="text-gray-500 font-medium">
                            Chủ nhà • Cập nhật 1 tiếng trước
                        </span>
                    </p>
                </div>
            </div>
            <div
                className="mt-2 read-more-wrapper"
                id="d4f2ea2a-9524-40b4-b1fe-0f9f63da8ce7"
            >
                <input type="hidden" className="expanded" defaultValue="false" />
                <p className="description line-clamp-5">
                    🏠 23a Nguyễn Hữu Cảnh , Phường 22 , Quận Bình Thạnh.
                    <br />
                    <br />
                    CĂN HỘ FULL NỘI THẤT PHÒNG STUDIO GIẾNG TRỜI - 5Tr5
                    <br />
                    <br />
                    🛏️ Nội thất: Giường, Kệ bếp, Máy lạnh, Tủ quần áo, Nệm, bàn ghế
                    <br />
                    <br />
                    💸 Dịch vụ: <br />
                    + Điện: 3.8K/kWh
                    <br />
                    + Phí dịch vụ: 150K/phòng
                    <br />
                    + Nước Máy: 100K/người
                    <br />
                    + Giữ Xe Máy: 0 đ/free xe
                    <br />
                    <br />
                    🧹 Tiện ích: Máy giặt chung, Không chung chủ, Giữ xe máy, Vệ sinh hành
                    lang, Camera 24/24, Giờ giấc tự do, Cổng vân tay
                    <br />
                    ✨ Ở tối đa: 3 người. <br />
                    🛵 Giữ tối đa: 2 xe
                </p>
                <span
                    className="read-more-btn text-gray-500"

                >
                    Xem thêm
                </span>
            </div>
            <div
                className="pt-2 pb-1 overflow-x-auto whitespace-nowrap"
                style={{ scrollbarWidth: "none" }}
            >
                <button

                    id="btnCommissionRate"
                    className="bg-gray-300 hover:bg-gray-400 focus:ring-2 focus:outline-none focus:ring-gray-400 focus:rounded font-medium rounded text-sm px-2 md:px-3 mr-1 py-1 md:py-1 text-center inline-flex items-center"
                    type="button"
                >
                    <span className="text-end">Còn 1 Phòng</span>
                    <svg
                        className="w-2 md:w-2.5 h-2 md:h-2.5 ms-2 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                <button

                    id="btnCommissionRate"
                    className="bg-e03 hover:bg-e03 focus:ring-2 focus:outline-none focus:ring-gray-400 focus:rounded font-medium rounded text-sm text-white px-2 md:px-3 mr-1 py-1 md:py-1 text-center inline-flex items-center"
                    type="button"
                >
                    <span className="text-end">Hoa hồng: 80%</span>
                    <svg
                        className="w-2 md:w-2.5 h-2 md:h-2.5 ms-2 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                <button

                    className="bg-blue-100 hover:bg-blue-200 focus:ring-2 focus:outline-none focus:ring-gray-200 focus:rounded font-medium rounded text-sm text-black px-2 md:px-3 mr-1 py-1 md:py-1 text-center inline-flex items-center"
                    type="button"
                >
                    <img
                        className="w-3 h-3 mr-2"
                        src="https://www.fphouse.vn/user/logo_zalo.png"
                    />
                    <span className="text-end">Nhóm Zalo</span>
                </button>
            </div>
            <div
                className="cursor-pointer"

            >
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <img
                        src="https://fphouse.cdn.vccloud.vn/ed4aa208-69fa-40e3-bcb3-47a51a31e8ff/d4f2ea2a-9524-40b4-b1fe-0f9f63da8ce7/DETAIL/z6214833867264_c63ef91cc474502727fbcf8171881d03_thumbnail_st.jpg"
                        className="w-full h-full mh-320 rounded-lg object-cover"
                        alt="Post Image"
                    />
                    <img
                        src="https://fphouse.cdn.vccloud.vn/ed4aa208-69fa-40e3-bcb3-47a51a31e8ff/d4f2ea2a-9524-40b4-b1fe-0f9f63da8ce7/DETAIL/z6214833911050_4a8e5e2c4dc607b8775e91e066b78f0c_thumbnail_st.jpg"
                        className="w-full h-full mh-320 rounded-lg object-cover"
                        alt="Post Image"
                    />
                </div>
            </div>
            <div

                className="flex p-1 my-2 border-2 border-dashed border-gray-200 rounded-md items-center cursor-pointer bg-gray-100"
            >
                <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                </svg>
                <div className="ml-2 w-full">
                    <p className="text-sm underline line-clamp-1 md:line-clamp-2">
                        23a Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, Thành phố Hồ Chí Minh
                    </p>
                    <p className="text-md font-semibold text-e03 mx-auto flex justify-between items-center">
                        <span>Giá: 5.5 Triệu</span>
                        <span className="text-end">Hoa hồng: 80%</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-between my-2">
                <p className="flex items-center cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-gray-500"
                    >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    <span className="text-gray-500 ml-1 cursor-pointer hover:underline">
                        6 người
                    </span>
                </p>
                <button className="text-blue-600 hover:text-blue-800" />
            </div>
            <hr />
            <div className="flex items-center justify-between mt-2">
                <p
                    className="flex items-center cursor-pointer"

                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                    <span className="text-gray-500 ml-1 font-semibold">Lưu</span>
                </p>
                <p className="flex items-center cursor-pointer hidden md:flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                        />
                    </svg>
                    <span
                        className="text-gray-500 ml-1 font-semibold"

                    >
                        Nhắn tin
                    </span>
                </p>
                <p className="flex items-center cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                    </svg>
                    <span
                        className="text-gray-500 ml-1 font-semibold"

                    >
                        Lấy số chủ
                    </span>
                </p>
                <p className="flex items-center cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                        />
                    </svg>
                    <span
                        className="text-gray-500 ml-1 font-semibold"

                    >
                        Chia sẻ
                    </span>
                </p>
            </div>
        </div>

    )
}

export default PostCard