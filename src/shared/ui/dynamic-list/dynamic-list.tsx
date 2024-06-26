import { useCallback } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

interface DynamicListProps {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    isSuccess: boolean;
    // setPage: React.Dispatch<React.SetStateAction<number>>;
    items: unknown[];
    loadNextPage: () => void;
    // limit: number;
    children: React.ComponentType<ListChildComponentProps<any>>;
}

export const DynamicList: React.FC<DynamicListProps> = ({
    hasNextPage,
    isNextPageLoading,
    isSuccess,
    // setPage,
    items,
    loadNextPage,
    // limit,
    children,
}) => {
    // const [page, setPage] = useState(0);

    const itemCount = isSuccess
        ? hasNextPage
            ? items.length + 1
            : items.length
        : 0;

    const isItemLoaded = (index: number) =>
        !hasNextPage && index < items.length;

    const loadMoreItems = useCallback(() => {
        console.log("Loading more items");
        console.log("Is next page loading: ", isNextPageLoading);
        console.log("Is next page loading: ", isNextPageLoading);

        isNextPageLoading ? () => {} : loadNextPage();
    }, [isNextPageLoading, loadNextPage]);

    // const Item = ({ index, style }) => (
    // <div style={style}>
    // {isItemLoaded(index) ? quests[index].name : "Loading..."}
    // </div>
    // );

    return (
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
        >
            {({ onItemsRendered, ref }) => (
                <List
                    height={400}
                    itemCount={itemCount}
                    itemSize={35}
                    width="100%"
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                >
                    {children}
                </List>
            )}
        </InfiniteLoader>
    );
};
