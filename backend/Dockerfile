# --------- Build ---------
#
#  docker build -t time-tracking-bff:local .
#  docker run --rm -p 10000:10000 \
#  -e PORT=10000 \
#  -e SPRING_DATA_MONGODB_URI='mongodb+srv://___?retryWrites=true&w=majority' \
#  time-tracking-bff:local
#```
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /workspace

COPY pom.xml ./
RUN mvn -q -B -DskipTests dependency:go-offline

COPY src ./src
RUN mvn -q -DskipTests package

# --------- Runtime ---------
FROM eclipse-temurin:21-jre
WORKDIR /app
ENV JAVA_OPTS="-XX:+UseG1GC -XX:MaxRAMPercentage=75 -XX:+HeapDumpOnOutOfMemoryError"
COPY --from=build /workspace/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["sh","-c","java $JAVA_OPTS -jar app.jar"]

