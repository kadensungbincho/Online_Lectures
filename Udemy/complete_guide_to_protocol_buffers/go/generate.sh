export PATH="$PATH:$(go env GOPATH)/bin"
protoc -I src/ --go_out=src/ src/simple/simple.proto
protoc -I src/ --go_out=src/ src/enum/enum_example.proto