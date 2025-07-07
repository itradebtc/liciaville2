'use client'
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRooms, setSelectedRooms] = useState('Select Rooms');

    const rooms = ['Exclusive Room', 'Executive Room',
                       'Luxury Room', 'Standard Room'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (rooms) => {
        setSelectedRooms(rooms);
        setIsOpen(false);
    };

    return (
        <div className="flex justify-center">
            <div className="relative inline-block text-left">
                {/* Dropdown button */}
                <button
                    type="button"
                    className="inline-flex justify-center items-center
                               border-l-4 border-l-yellow-600 border-r-4 border-r-yellow-600 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md w-80 bg-transparent text-black "
                    onClick={toggleDropdown}
                >
                    {selectedRooms}
                    <FaCaretDown className="ml-2" />
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                    <div className="origin-top-right absolute
                                    right-0 mt-2 w-80 rounded-md
                                    shadow-lg bg-white ring-1 ring-black
                                    ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {rooms.map((rooms, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="block px-4 py-2
                                               text-sm text-black
                                               hover:bg-gray-100"
                                    onClick={() => handleSelect(rooms)}
                                >
                                    {rooms}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}