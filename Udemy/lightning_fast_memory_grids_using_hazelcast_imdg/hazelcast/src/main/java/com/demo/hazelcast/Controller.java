package com.demo.hazelcast;

import com.hazelcast.core.IMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class Controller {

    @Autowired
    @Qualifier("nameMap")
    IMap<String, String> nameMap;

    @Autowired
    @Qualifier("customerMap")
    IMap<Long, Customer> customerMap;

    @Autowired
    Service service;

    @RequestMapping(path="/putValue")
    public String putValue(@RequestParam(name="key") String key,
                           @RequestParam(name="value") String value) {
        nameMap.put(key, value);
        return "ok";
    }

    @RequestMapping(path="/getValue")
    public String getValue(@RequestParam(name="key") String key) {
        return nameMap.get(key);
    }

    @RequestMapping("/loadData")
    public String loadData() {
        int count = service.findCount();
        int BATCH_SIZE = 10000;
        int totalNumberOfPages = count / BATCH_SIZE;
        Map<Long, Customer> allCustomers = new HashMap<>();
        for (int i=0; i<totalNumberOfPages; i++) {
            service.findAll(PageRequest.of(i, BATCH_SIZE)).forEach(c -> allCustomers.put(c.getId(), c));
            customerMap.putAll(allCustomers);
            allCustomers.clear();
            System.out.println("Loaded " + i);
        }
        return "Data inserted";
    }

    @RequestMapping(path="/getCustomerFromDB")
    public Customer getCustomerFromDB(@RequestParam(name="id") Long id) {
        return service.getCustomerById(id);
    }

    @RequestMapping(path="/getCustomerFromCache")
    public Customer getCustomerFromCache(@RequestParam(name="id") Long id) {
        return customerMap.get(id);
    }
}
