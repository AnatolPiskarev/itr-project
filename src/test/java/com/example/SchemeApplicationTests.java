package com.example;

import com.example.common.*;
import com.example.common.entity.*;
import com.example.dao.api.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.HashSet;
import java.util.Set;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SchemeApplication.class)
@WebAppConfiguration
@Sql("/sql/clean_tables.sql")
public class SchemeApplicationTests {
	@Autowired
	private UserDao userDao;
	@Autowired
	private TagDao tagDao;
	@Autowired
	private ElementDao elementDao;
	@Autowired
	private SchemeDao schemeDao;
	@Autowired
	private ElementCoordinatesDao elementCoordinatesDao;
	@Autowired
	private LineDao lineDao;
	@Autowired
	private CommentDao commentDao;
	@Autowired
	private LikeDao likeDao;
	@Autowired
	private SchemeRatingDao schemeRatingDao;

	@Test
	public void contextLoads() {
	}

	public void createFakeData() {
		User user = new User();
		user.setEmail("tirionlannister1993@gmail.com");
		user.setFullName("Anatol Piskarev");
		user.setPseudonym("Onotole");
		user.setPassword("password");
		user.setRole(Role.ROLE_ADMIN);
		userDao.save(user);
		Tag tag = new Tag();
		tag.setName("chlen");
		//tag = tagDao.save(tag);
		Scheme scheme = new Scheme();
		scheme.setUser(user);
		scheme.setName("chlenodiodnii most");
		scheme.setCategory("huevypryamitel");
		scheme.setDescription("vypryamlyaet hui");
		scheme.setCreationDate(1L);
		Set<Tag> tags  = new HashSet<>();
		tags.add(tag);
		scheme.setTags(tags);
		scheme = schemeDao.save(scheme);

		SchemeRating rating = new SchemeRating();
			rating.setUserId(user.getId());
			rating.setSchemeId(scheme.getId());
			rating.setValue(8);
			rating = schemeRatingDao.save(rating);
		Element element = new Element();
		element.setName("Resistor");
		element = elementDao.save(element);
		for(int i =0; i <10; i++) {
			ElementCoordinates coordinates = new ElementCoordinates();
			coordinates.setElement(element);
			coordinates.setSchemeId(scheme.getId());
			coordinates.setxCoordinate(1L + i);
			coordinates.setyCoordinate(1L + i);
			coordinates =  elementCoordinatesDao.save(coordinates);
		}
		for(long i=0; i<10; i++) {
			Line line = new Line();
			line.setSchemeId(scheme.getId());
			line.setxBeginCoordinate(i);
			line.setyBeginCoordinate(i);
			line.setxEndCoordinate(i + 2);
			line.setyEndCoordinate(i + 2);
			lineDao.save(line);
		}
		Comment comment = new Comment();
		comment.setScheme(scheme);
		comment.setCommentary("This is Fucking bullshit");
		comment.setUser(user);
		commentDao.save(comment);
		Like like = new Like();
		like.setUserId(user.getId());
		like.setCommentId(comment.getId());
		like = likeDao.save(like);
	}

}
