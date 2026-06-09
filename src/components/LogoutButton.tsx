"use client";

type LogoutButtonProps = {
    onLogout: () => Promise<void>;
}

export function LogoutButton({ onLogout } : LogoutButtonProps) {
    return (
        <button className="text-white
            p-2 bg-blue-900 w-20 rounded-md cursor-pointer
            text-sm text-center"
            onClick={onLogout}>
            Logout
        </button>
    )
}