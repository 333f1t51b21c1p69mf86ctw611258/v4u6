package com.dasanzhone.vhub.web.repository;

import com.dasanzhone.vhub.web.domain.Todo;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Todo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TodoRepository extends MongoRepository<Todo,String> {
    
}
