package com.learnreactivespring.router;

import com.learnreactivespring.handler.ItemsHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static com.learnreactivespring.constans.ItemConstants.ITEM_FUNCTIONAL_END_POINT_V1;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;

@Configuration
public class ItemsRouter {

    @Bean
    public RouterFunction<ServerResponse> itemsRoute(ItemsHandler itemsHandler) {
        return RouterFunctions
                .route(
                        GET(ITEM_FUNCTIONAL_END_POINT_V1).and(accept(MediaType.APPLICATION_JSON)),
                        itemsHandler::getAllItems)
                .andRoute(
                        GET(ITEM_FUNCTIONAL_END_POINT_V1+"/{id}").and(accept(MediaType.APPLICATION_JSON)),
                        itemsHandler::getOneItem)
                .andRoute(
                        POST(ITEM_FUNCTIONAL_END_POINT_V1),
                        itemsHandler::createItem)
                .andRoute(
                        DELETE(ITEM_FUNCTIONAL_END_POINT_V1+"/{id}"),
                        itemsHandler::deleteItem)
                .andRoute(
                        PUT(ITEM_FUNCTIONAL_END_POINT_V1+"/{id}"),
                        itemsHandler::updateItem
                )
                ;
    }
}
