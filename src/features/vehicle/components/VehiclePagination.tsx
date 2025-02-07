type VehiclePaginationProps = {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
};
import {Button} from "@/components/ui/button";
export const VehiclePagination = ({
                                      currentPage,
                                      totalPages,
                                      setCurrentPage
                                  }: VehiclePaginationProps) => {
    return (
        <div className="flex justify-center items-center gap-2 mt-4">
            <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                ←
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                    key={page}
                    variant={page === currentPage ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </Button>
            ))}

            <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                →
            </Button>
        </div>
    );
};
