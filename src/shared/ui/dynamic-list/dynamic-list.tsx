import { useCallback } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

interface DynamicListProps {
    isLoading: boolean;
    isSuccess: boolean;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    items: unknown[];
    // limit: number;
    children: React.ComponentType<ListChildComponentProps<any>>;
}

export const DynamicList: React.FC<DynamicListProps> = ({
    isLoading,
    isSuccess,
    setPage,
    items,
    // limit,
    children,
}) => {
    // const [page, setPage] = useState(0);

    const isItemLoaded = (index: number) => !isLoading && index < items.length;

    const loadMoreItems = useCallback(() => {
        if (isLoading) return Promise.resolve();
        setPage((prevPage) => prevPage + 1);
        return Promise.resolve();
    }, [isLoading]);

    // const Item = ({ index, style }) => (
    // <div style={style}>
    // {isItemLoaded(index) ? quests[index].name : "Loading..."}
    // </div>
    // );

    return (
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={isSuccess ? items.length + 1 : 0}
            loadMoreItems={loadMoreItems}
        >
            {({ onItemsRendered, ref }) => (
                <List
                    height={400}
                    itemCount={isSuccess ? items.length + 1 : 0}
                    itemSize={35}
                    width={300}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                >
                    {children}
                </List>
            )}
        </InfiniteLoader>
    );
};
