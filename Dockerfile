# Use the official Golang image as the base image
FROM golang:1.22.2

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy the go.mod and go.sum files for dependency resolution
COPY backend/go.mod backend/go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the backend source code from the project directory to the Working Directory inside the container
COPY backend/ .

# Build the Go app
RUN go build -o main .

# Expose port 8080 to the outside world (if needed, adjust according to your app)
EXPOSE 8080

# Command to run the executable
CMD ["./main"]
