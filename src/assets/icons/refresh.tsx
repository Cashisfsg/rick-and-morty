interface RefreshProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const Refresh: React.FC<RefreshProps> = (props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20 12V13H22V12H20ZM12 3V1.99999L11.9962 2.00001L12 3ZM5.26 5.74L4.56496 5.02103C4.5609 5.02495 4.55688 5.02891 4.55289 5.03289L5.26 5.74ZM2.29289 7.29289C1.90237 7.68342 1.90237 8.31658 2.29289 8.70711C2.68342 9.09763 3.31658 9.09763 3.70711 8.70711L2.29289 7.29289ZM22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893L17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12H22ZM19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2V4C14.1217 4 16.1566 4.84285 17.6569 6.34315L19.0711 4.92893ZM11.9962 2.00001C9.22213 2.01044 6.55946 3.09289 4.56496 5.02103L5.95504 6.45897C7.57848 4.88955 9.74577 4.00849 12.0038 3.99999L11.9962 2.00001ZM4.55289 5.03289L2.29289 7.29289L3.70711 8.70711L5.96711 6.44711L4.55289 5.03289Z"
                fill="#B2F8C0"
            />
            <path
                d="M3 3V8H8"
                stroke="#B2F8C0"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.516 20.9905 16.931 20.0088 18.74 18.26L20.5 16.5"
                stroke="#B2F8C0"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M16 16H21V21"
                stroke="#B2F8C0"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    );
};
