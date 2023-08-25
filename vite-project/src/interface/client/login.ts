export interface ApiResponse<T> {
    success: boolean;
    data: T;
    // You can add more properties if needed
}
