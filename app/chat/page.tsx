"use client";
import ConnectWalletModal from '@/components/onboarding/connectwallet';
import React from 'react';


const ChatPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>Chat Page</h1>
            <p>Welcome to the chat application!</p>
            <button onClick={openModal}>Connect Wallet</button>
            {/* {isModalOpen && <ConnectWalletModal onClose={closeModal} />} */}
        </div>
    );
};

export default ChatPage;