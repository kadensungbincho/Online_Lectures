package com.udemy.apachekafka.tutorial3;

import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.nio.client.HttpAsyncClientBuilder;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.RestHighLevelClient;

public class ElasticSearchConsumer {

    public static RestHighLevelClient createClient() {

        String hostname = "";
        String username = "";
        String password = "";

        // don't do if you run a local ES
        final CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
        credentialsProvider.setCredentials(AuthScope.ANY,
                new UsernamePasswordCredentials(username, password));

        RestClientBuilder builder = RestClient.builder(
            new HttpHost(hostname, 443, "https"))
            .setHttpClientConfigCallback(
                new RestClientBuilder.HttpClientConfigCallback() {
                 @Override
                 public HttpAsyncClientBuilder customizeHttpClient(HttpAsyncClientBuilder httpAsyncClientBuilder) {
                     return httpAsyncClientBuilder.setDefaultCredentialsProvider(credentialsProvider);
                 }
             });

        RestHighLevelClient client = new RestHighLevelClient(builder);
        return client;
    }

    public static void main(String[] args) {

    }

}
