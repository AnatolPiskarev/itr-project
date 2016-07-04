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

	private FakeData fakeData = new FakeData();

	@Test
	public void contextLoads() {
		createFakeData();
	}

	public void createFakeData() {

//		fakeData.createFakeData();

		User user = new User();
		user.setActive(Boolean.TRUE);
		user.setFacebookId(111L);
		user.setFullName("Petr");
		user.setRole(Role.ROLE_ADMIN);
		userDao.save(user);

		User user1 = new User();
		user1.setActive(Boolean.TRUE);
		user1.setFacebookId(222L);
		user1.setFullName("Vasya");
		user1.setRole(Role.ROLE_ADMIN);
		user1 = userDao.save(user1);

		User user2 = new User();
		user2.setActive(Boolean.TRUE);
		user2.setFacebookId(333L);
		user2.setFullName("Sereja");
		user2.setRole(Role.ROLE_ADMIN);
		user2 = userDao.save(user2);

		Scheme scheme = new Scheme();
		scheme.setName("Popka");
		scheme.setDescription("Rak");
		scheme.setCategory("Ruberoid");
		scheme.setUser(user);
		scheme.setCreationDate(1L);
		scheme = schemeDao.save(scheme);

		Scheme scheme1 = new Scheme();
		scheme1.setName("PIZDASUKA");
		scheme1.setDescription("1:25");
		scheme1.setCategory("Anshlag");
		scheme1.setUser(user1);
		scheme1.setCreationDate(2L);
		scheme1 = schemeDao.save(scheme1);

		Scheme scheme2 = new Scheme();
		scheme2.setName("Misinetz");
		scheme2.setDescription("Popularnij anekdot");
		scheme2.setCategory("Anshlag");
		scheme2.setUser(user2);
		scheme2.setCreationDate(3L);
		scheme2 = schemeDao.save(scheme2);

//		User user = new User();
//		user.setEmail("tirionlannister1993@gmail.com");
//		user.setFullName("Anatol Piskarev");
//		user.setPseudonym("Onotole");
//		user.setFacebookId(123213L);
//		user.setRole(Role.ROLE_ADMIN);
//		userDao.save(user);
//		Tag tag = new Tag();
//		tag.setName("chlen");
//		//tag = tagDao.save(tag);
//		Scheme scheme = new Scheme();
//		scheme.setUser(user);
//		scheme.setName("chlenodiodnii most");
//		scheme.setCategory("huevypryamitel");
//		scheme.setDescription("vypryamlyaet hui");
//		scheme.setCreationDate(1L);
//		Set<Tag> tags  = new HashSet<>();
//		tags.add(tag);
//		scheme.setTags(tags);
//		scheme = schemeDao.save(scheme);
//
//		SchemeRating rating = new SchemeRating();
//			rating.setUserId(user.getId());
//			rating.setSchemeId(scheme.getId());
//			rating.setValue(8);
//			rating = schemeRatingDao.save(rating);
//		Element element = new Element();
//		element.setName("Resistor");
//		element = elementDao.save(element);
//		for(int i =0; i <10; i++) {
//			ElementCoordinates coordinates = new ElementCoordinates();
//			coordinates.setElement(element);
//			coordinates.setSchemeId(scheme.getId());
//			coordinates.setxCoordinate(1L + i);
//			coordinates.setyCoordinate(1L + i);
//			coordinates =  elementCoordinatesDao.save(coordinates);
//		}
//		for(long i=0; i<10; i++) {
//			Line line = new Line();
//			line.setSchemeId(scheme.getId());
//			line.setxBeginCoordinate(i);
//			line.setyBeginCoordinate(i);
//			line.setxEndCoordinate(i + 2);
//			line.setyEndCoordinate(i + 2);
//			lineDao.save(line);
//		}
//		Comment comment = new Comment();
//		comment.setScheme(scheme);
//		comment.setCommentary("This is Fucking bullshit");
//		comment.setUser(user);
//		commentDao.save(comment);
//		Like like = new Like();
//		like.setUserId(user.getId());
//		like.setCommentId(comment.getId());
//		like = likeDao.save(like);
	}

}
