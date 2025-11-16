package main

import (
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
	"skillforge-engine/skillforge"
)

// server is used to implement skillforge.SkillforgeEngineServer.
type server struct {
	skillforge.UnimplementedSkillforgeEngineServer
}

// GetCbe implements skillforge.SkillforgeEngineServer
func (s *server) GetCbe(ctx context.Context, in *skillforge.CbeRequest) (*skillforge.CbeResponse, error) {
	log.Printf("Received: %v", in)
	return &skillforge.CbeResponse{
		AcademicObjective: "Learn about gRPC",
		QuestObjective:    "Implement a gRPC server",
		AssessmentMethod:  "Code review",
		KarmicImpact:      10.0,
		TargetSkill:       "Go",
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	skillforge.RegisterSkillforgeEngineServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
